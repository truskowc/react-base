import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Typography
} from '@mui/material';

const checkError = (expression, message) => {
  if (expression) throw new Error(message);
};

const tableBodyRowStyles = {
  '&:nth-of-type(odd)': {
    backgroundColor: 'table.oddRow'
  },
  '&:hover': {
    backgroundColor: 'table.hoverRow'
  }
};

const TableLayout = ({
  data,
  config,
  selected,
  onSelected
}) => {
  const [currentlySelected, setCurrentlySelected] = useState(selected);
  checkError(!config.definition, 'You must provide a defintion for PageTable');
  checkError(!config.uid, 'You must specify a unique ID (uid) for the data being presented');

  const defs = Object.keys(config.definition);

  const onSelect = (evt) => {
    const { checked, value } = evt.target;
    const ret = checked ? [...currentlySelected, ...[value]] : currentlySelected.filter((sel) => sel !== value);
    setCurrentlySelected(ret);
    onSelected(ret);
  };

  const isSelected = (id) => currentlySelected.indexOf(id) > -1;

  return (
    <TableContainer sx={{ minWidth: '300px', height: '100%' }}>
      <Table>
        <TableHead>
          <TableRow>
            {config.selectable
              && (
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
              )}
            {defs.map((def) => {
              const cfg = config.definition[def];
              return (
                <TableCell key={def}>
                  <Typography variant="tableHead" noWrap>{cfg.label || def}</Typography>
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row[config.uid]} sx={tableBodyRowStyles}>
              {config.selectable
                && (
                  <TableCell padding="checkbox">
                    <Checkbox value={row[config.uid]} onChange={onSelect} checked={isSelected(row[config.uid])} />
                  </TableCell>
                )}
              {defs.map((def) => {
                const cfg = config.definition[def];
                const key = `${def}-${row[config.uid]}`;
                let val = row[def];

                if (cfg.transform) val = cfg.transform(val, row);

                return (
                  <TableCell key={key}>
                    <Typography noWrap>{val}</Typography>
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

TableLayout.propTypes = {
  data: PropTypes.array,
  config: PropTypes.object,
  selected: PropTypes.array,
  onSelected: PropTypes.func,
};

TableLayout.defaultValues = {
  selected: []
};

export default TableLayout;
