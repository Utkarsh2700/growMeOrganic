import React, { useState } from "react";
import { departmentsData } from "../store/data";
import {
  Box,
  Checkbox,
  Collapse,
  Container,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

interface Department {
  department: string;
  sub_departments: string[];
}

const DepartmentList: React.FC = () => {
  const [open, setOpen] = useState<{ [key: string]: boolean }>({});
  const [selected, setSelected] = useState<{ [key: string]: boolean }>({});
  const handleToggle = (department: string) => {
    setOpen((prev) => ({ ...prev, [department]: !prev[department] }));
  };

  const handleSelect = (department: string, sub_departments: string[]) => {
    const isSelected = !selected[department];
    const newSelected = { ...selected, [department]: isSelected };
    sub_departments.forEach((sub) => {
      newSelected[sub] = isSelected;
    });
    setSelected(newSelected);
  };

  const handleSubSelect = (sub: string, department: string) => {
    const isSelected = !selected[sub];
    const newSelected = { ...selected, [sub]: isSelected };

    const allSubSelected = departmentsData
      .find((dept) => dept.department === department)!
      .sub_departments.every((subDept) => newSelected[subDept]);

    newSelected[department] = allSubSelected;
    setSelected(newSelected);
  };

  return (
    <Container>
      <List>
        {departmentsData.map((dept: Department) => (
          <Box key={dept.department}>
            <ListItem button onClick={() => handleToggle(dept.department)}>
              <Checkbox
                checked={selected[dept.department] || false}
                onChange={() =>
                  handleSelect(dept.department, dept.sub_departments)
                }
              />
              <ListItemText primary={dept.department} />
              {open[dept.department] ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open[dept.department]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {dept.sub_departments.map((sub) => (
                  <ListItem
                    key={sub}
                    button
                    sx={{ pl: 4 }}
                    onClick={() => handleSubSelect(sub, dept.department)}
                  >
                    <Checkbox checked={selected[sub] || false} />
                    <ListItemText primary={sub} />
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </Box>
        ))}
      </List>
    </Container>
  );
};

export default DepartmentList;
