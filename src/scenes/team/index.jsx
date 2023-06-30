// MUI Components
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

// MUI Icons
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

// Theme
import { tokens } from "../../theme";

// Data
import { mockDataTeam } from "../../data/mockData";

// Components
import Header from "../../components/Header";

const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        { field: "id", headerName: "ID" },
        { field: "name", headerName: "Name" },
        { field: "email", headerName: "Email" },
        { field: "age", headerName: "Age" },
        { field: "phone", headerName: "Phone" },
        { field: "access", headerName: "Access" },
    ];

    return (
        <Box>
            <Header title="TEAM" subtitle="Managing the Team Members" />
            <Box>
                <DataGrid rows={mockDataTeam} columns={columns} />
            </Box>
        </Box>
    );
};

export default Team;
