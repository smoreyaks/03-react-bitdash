import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Questions" />
            {/* FAQ Accordion Q1 */}
            <Accordion
                defaultExpanded
                sx={{
                    background: `${colors.primary[400]}`,
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                    "&:before": {
                        backgroundColor: "transparent !important",
                    },
                }}
            >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        First Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. A suscipit, similique unde quaerat rem obcaecati
                        sit voluptatibus doloremque dolores in!
                    </Typography>
                </AccordionDetails>
            </Accordion>
            {/* FAQ Accordion Q2 */}
            <Accordion
                defaultExpanded
                sx={{
                    background: `${colors.primary[400]}`,
                }}
            >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Second Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit,
                        lectus orci maecenas aliquam metus justo, dignissim nisi
                        venenatis nec suspendisse odio.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            {/* FAQ Accordion Q3 */}
            <Accordion
                defaultExpanded
                sx={{
                    background: `${colors.primary[400]}`,
                }}
            >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Third Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit,
                        conubia aptent habitant cras malesuada nibh, ut potenti
                        lobortis accumsan ridiculus augue.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            {/* FAQ Accordion Q4 */}
            <Accordion
                defaultExpanded
                sx={{
                    background: `${colors.primary[400]}`,
                }}
            >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Fourth Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit,
                        magna aenean fames taciti scelerisque mus, elementum
                        nostra sociis suspendisse senectus curabitur.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            {/* FAQ Accordion Q5 */}
            <Accordion
                defaultExpanded
                sx={{
                    background: `${colors.primary[400]}`,
                }}
            >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Fifth Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit,
                        inceptos ante netus id praesent ultrices, vulputate
                        libero suscipit scelerisque vehicula cubilia.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            {/* FAQ Accordion Q6 */}
            <Accordion
                defaultExpanded
                sx={{
                    background: `${colors.primary[400]}`,
                    borderBottomLeftRadius: "10px !important",
                    borderBottomRightRadius: "10px !important",
                }}
            >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Final Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit,
                        vitae cum ad feugiat venenatis in, semper dictumst mi
                        laoreet diam accumsan.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
};

export default FAQ;
