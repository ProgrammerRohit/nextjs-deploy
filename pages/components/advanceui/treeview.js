import * as React from 'react';
import Box from '@mui/material/Box';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import Seo from '@/shared/layout-components/seo/seo';
import { Card, Col, Row } from 'react-bootstrap';
import Pageheader from '@/shared/layout-components/pageheader/pageheader';

const Treeviews = () => {
  return (
    <React.Fragment>
      <Seo title={"Treeview"} />
      <Pageheader title="Treeview" heading="Advanced Ui" active="Treeview" />
      <Row>
        <Col sm={12}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>
                Basic Treeview
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <div>
                <Box sx={{ height: 220, flexGrow: 1, maxWidth: 400 }}>
                  <SimpleTreeView>
                    <TreeItem itemId="1" label="Treeview1">
                      <TreeItem itemId="2" label="Company Maintenance" />
                      <TreeItem itemId="3" label="Employees">
                        <TreeItem itemId="4" label="Reports">
                          <TreeItem itemId="5" label="Report1" />
                          <TreeItem itemId="6" label="Report2" />
                          <TreeItem itemId="7" label="Report3" />
                        </TreeItem>
                        <TreeItem itemId="8" label="Employee Maint.">
                          <TreeItem itemId="9" label="Reports">
                            <TreeItem itemId="10" label="Report1" />
                            <TreeItem itemId="11" label="Report2" />
                            <TreeItem itemId="12" label="Report3" />
                          </TreeItem>
                          <TreeItem itemId="13" label="Employee Maint." />
                          <TreeItem itemId="14" label="Reports">
                            <TreeItem itemId="15" label="Report1" />
                            <TreeItem itemId="16" label="Report2" />
                            <TreeItem itemId="17" label="Report3" />
                          </TreeItem>
                          <TreeItem itemId="18" label="Employee Maint." />
                        </TreeItem>
                      </TreeItem>
                      <TreeItem itemId="19" label="Human Resources" />
                    </TreeItem>
                    <TreeItem itemId="20" label="Treeview2">
                      <TreeItem itemId="21" label="Company Maintenance" />
                      <TreeItem itemId="22" label="Employees">
                        <TreeItem itemId="23" label="Reports">
                          <TreeItem itemId="24" label="Report1" />
                          <TreeItem itemId="25" label="Report2" />
                          <TreeItem itemId="26" label="Report3" />
                        </TreeItem>
                        <TreeItem itemId="27" label="Employee Maint.">
                          <TreeItem itemId="28" label="Reports">
                            <TreeItem itemId="29" label="Report1" />
                            <TreeItem itemId="30" label="Report2" />
                            <TreeItem itemId="31" label="Report3" />
                          </TreeItem>
                          <TreeItem itemId="32" label="Employee Maint." />
                          <TreeItem itemId="33" label="Reports">
                            <TreeItem itemId="34" label="Report1" />
                            <TreeItem itemId="35" label="Report2" />
                            <TreeItem itemId="36" label="Report3" />
                          </TreeItem>
                          <TreeItem itemId="37" label="Employee Maint." />
                        </TreeItem>
                      </TreeItem>
                      <TreeItem itemId="38" label="Human Resources" />
                    </TreeItem>
                  </SimpleTreeView>
                </Box>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

    </React.Fragment>
  )
}

Treeviews.layout = "Contentlayout"

export default Treeviews;
