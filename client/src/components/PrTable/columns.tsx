import { GridColDef } from '@material-ui/data-grid';
import { PullRequest } from '../../models/pullRequest';
import { PrTableLabelsFilter, PrTableStatusFilter } from './components';

interface SyColumn extends Omit<GridColDef, 'field'> {
  field: keyof PullRequest | 'action';
}

const DEFAULT_COL_WIDTH = 150;

export const columns: SyColumn[] = [
  {
    field: 'id',
    headerName: 'ID',
    align: 'left',
    headerAlign: 'left',
    width: DEFAULT_COL_WIDTH * 1.5,
    sortable: false,
    filterable: false,
    disableColumnMenu: true
  },
  {
    field: 'prNumber',
    headerName: 'PR Number',
    type: 'number',
    width: DEFAULT_COL_WIDTH,
    align: 'left',
    headerAlign: 'left',
    editable: true,
    sortable: true,
    filterable: false,
    disableColumnMenu: true
  },
  {
    field: 'status',
    headerName: 'Status',
    type: 'string',
    width: DEFAULT_COL_WIDTH,
    align: 'left',
    headerAlign: 'left',
    filterOperators: [
      {
        label: 'is',
        value: 'is',
        getApplyFilterFn: () => null,
        InputComponent: PrTableStatusFilter
      }
    ],
    editable: true,
    sortable: false
  },
  {
    field: 'title',
    headerName: 'Title',
    type: 'string',
    width: DEFAULT_COL_WIDTH,
    align: 'left',
    headerAlign: 'left',
    editable: true,
    sortable: true,
    filterable: false,
    disableColumnMenu: true
  },
  {
    field: 'description',
    type: 'string',
    headerName: 'Description',
    width: DEFAULT_COL_WIDTH,
    align: 'left',
    headerAlign: 'left',
    editable: true,
    sortable: false,
    filterable: false,
    disableColumnMenu: true
  },
  {
    field: 'author',
    headerName: 'Author',
    type: 'string',
    width: DEFAULT_COL_WIDTH,
    align: 'left',
    headerAlign: 'left',
    editable: true,
    sortable: false,
    filterable: false,
    disableColumnMenu: true
  },
  {
    field: 'labels',
    headerName: 'Labels',
    type: 'string',
    width: DEFAULT_COL_WIDTH,
    align: 'left',
    headerAlign: 'left',
    editable: true,
    sortable: false,
    filterOperators: [
      {
        label: 'is',
        value: 'is',
        getApplyFilterFn: () => null,
        InputComponent: PrTableLabelsFilter
      }
    ],
    filterable: true
  },
  {
    field: 'createdAt',
    headerName: 'Created At',
    type: 'number',
    width: DEFAULT_COL_WIDTH,
    align: 'left',
    headerAlign: 'left',
    sortable: false,
    filterable: false,
    disableColumnMenu: true
  },
  {
    field: 'action',
    headerName: ' ',
    width: DEFAULT_COL_WIDTH,
    align: 'center',
    headerAlign: 'left',
    sortable: false,
    filterable: false,
    disableColumnMenu: true
  }
];
