import React, { useEffect, useState } from 'react';
import { DataGrid, GridCellParams, GridFilterModel, GridSortModel } from '@material-ui/data-grid';
import { columns } from './columns';
import { createPullRequest, getPullRequests } from '../../api/pullRequests';
import { GetPullRequestsParams, PullRequestData } from '../../api/types';
import styles from './PrTable.module.scss';
import AddIcon from '@material-ui/icons/Add';
import { Button } from '@material-ui/core';
import { PullRequest } from '../../models/pullRequest';
import { debounce } from 'lodash';

const editRowInit = { id: 'Add PR:' }

export const PrTable = () => {
  const [prs, setPrs] = useState<PullRequestData[]>([]);
  const [editRow, setEditRow] = useState<Partial<PullRequest>>(editRowInit);
  const [loading, setLoading] = useState<boolean>(false);
  const [filterValue, setFilterValue] = useState<GetPullRequestsParams>({});

  useEffect(() => {
    getPrs();
  }, [filterValue]);

  const getPrs = debounce(async () => {
    setLoading(true);
    const res = await getPullRequests(filterValue);
    if (res) setPrs(res);
    setLoading(false);
  }, 200);

  const handleCellEdit = (params: any) => {
    const { field, props: { value } } = params;
    setEditRow((editRow) => ({ ...editRow, [field]: value }));
  }

  const handleCreateRow = async () => {
    const res = await createPullRequest(editRow as PullRequest);
    if (res) {
      getPrs();
      setEditRow(editRowInit);
    }
  };

  const isCellEditable = (params: GridCellParams) => params?.row?.id === editRowInit.id;

  const handleSortModelChange = (model: GridSortModel, details?: any) => {
    debugger
  };

  const onFilterChange = (filterModel: GridFilterModel) => {
    if (!filterModel.items?.length) return setFilterValue({});
    const { columnField, value } = filterModel?.items?.[0];
    const newFilter = { [columnField as string]: value }
    if (newFilter) setFilterValue((filterValue) => ({ ...filterValue, ...newFilter }));
  }

  return (
    <div className={styles.root}>
      <DataGrid
        rows={[editRow, ...prs]}
        columns={columns}
        disableColumnSelector
        filterMode="server"
        disableSelectionOnClick
        pageSize={10}
        loading={loading}
        onFilterModelChange={onFilterChange}
        isCellEditable={isCellEditable}
        onEditCellPropsChange={handleCellEdit}
        onSortModelChange={handleSortModelChange}
      />

      <div className={styles.button}>
        <Button variant="contained" color="primary">
          <AddIcon onClick={handleCreateRow} />
        </Button>
      </div>
    </div>
  );
};
