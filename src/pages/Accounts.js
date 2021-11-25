import { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import {
  Box,
  Tabs,
  Tab,
  Button,
} from '@mui/material';
import {
  HighlightOff,
  AddCircleOutline,
} from '@mui/icons-material';
import {
  Page,
  PageBanner,
  PageBody,
  PageDrawer,
  PageDrawerHeader,
  PageCard,
  PageCardBody,
  PageCardHeader,
  PageCardFooter,
} from '../components/layout/PageLayout';
import Menu from '../components/layout/Responsive/ResponsiveMenu';
import {
  TableLayout,
  TableStatusBar
} from '../components/layout/TableLayout';
import UserForm from '../components/accounts/UserForm';
import GroupForm from '../components/accounts/GroupForm';
import RoleForm from '../components/accounts/RoleForm';
import tableData from '../__mocks__/tableData';

const tableConfig = {
  selectable: true,
  uid: 'id',
  definition: {
    name: {
      label: 'Name',
      transform: (val, row) => (`${row.fname} ${row.lname}`)
    },
    email: { label: 'Email' },
    created: {
      label: 'Created',
      transform: (val) => (formatDistanceToNow(val))
    }
  }
};

const Accounts = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selected, setSelected] = useState([]);
  const selectedLen = selected.length || 0;

  const addUser = () => {
    setDrawerOpen(true);
  };

  const deleteUsers = () => {
    console.log('DELETE USERS');
  };

  const handleOnSelected = (sel) => {
    setSelected(sel);
  };

  const changeTab = (evt, newVal) => {
    setCurrentTab(newVal);
  };

  const getDrawerTitle = () => {
    switch (currentTab) {
      case 0: return 'Add New User';
      case 1: return 'Add New Role';
      case 2: return 'Add New Group';
      default: return '';
    }
  };

  const controls = [
    [
      { label: 'Add User', onClick: addUser, icon: <AddCircleOutline /> },
      {
        label: `Delete User${(selectedLen > 1 ? `s (${selectedLen})` : '')}`,
        onClick: deleteUsers,
        icon: <HighlightOff />,
        show: selectedLen > 0,
        sx: { color: 'error.main' },
      },
      { label: 'Toggle Drawer', onClick: () => setDrawerOpen(!drawerOpen) }
    ],
    [
      { label: 'Add Role', onClick: addUser, icon: <AddCircleOutline /> },
    ],
    [
      { label: 'Add Group', onClick: addUser, icon: <AddCircleOutline /> },
    ],
  ];

  return (
    <Page title="Account Management">
      <PageBanner title="Account Management">
        <Menu config={controls[currentTab]} />
      </PageBanner>
      <PageBody>
        <PageCard>
          <PageCardHeader showDivider>
            <Tabs value={currentTab} onChange={changeTab}>
              <Tab label="Users" />
              <Tab label="Roles" />
              <Tab label="Groups" />
            </Tabs>
          </PageCardHeader>
          <PageCardBody>
            {currentTab === 0
              && (
                <TableLayout
                  data={tableData}
                  config={tableConfig}
                  selected={selected}
                  onSelected={handleOnSelected}
                />
              )}
            {currentTab === 1
              && (
                <>
                  <Box sx={{ py: 100, border: '5px solid #ff00ff' }}>Keep Scrolling</Box>
                  <Box sx={{ py: 100, border: '5px solid #ffff00' }}>Keep Scrolling</Box>
                </>
              )}
            {currentTab === 2
              && <Box p={3}>Box 3</Box> }
          </PageCardBody>
          {currentTab === 0
            && (
              <PageCardFooter sx={{ p: 2 }}>
                <TableStatusBar selected={selectedLen} />
              </PageCardFooter>
            )}
          {currentTab === 2
            && (
              <PageCardFooter p={2}>
                <Box display="flex" justifyContent="end">Page footer without divider</Box>
                <Box display="flex" justifyContent="end">
                  <Button color="primary">Cancel</Button>
                  <Button variant="contained" color="primary">Save</Button>
                </Box>
              </PageCardFooter>
            )}
        </PageCard>
        <PageDrawer open={drawerOpen}>
          <PageDrawerHeader title={getDrawerTitle()} onClose={() => setDrawerOpen(false)} />
          {{
            0: <UserForm />,
            1: <RoleForm />,
            2: <GroupForm />,
          }[currentTab]}
        </PageDrawer>
      </PageBody>
    </Page>
  );
};

export default Accounts;
