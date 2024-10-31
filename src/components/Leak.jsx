import React, { useState } from "react";
import {
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
} from "@mui/material";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Leak = () => {
    const [inputData] = useState([
        {
            unitName: "A",
            startTime: "04-01-2024 10:00",
            endTime: "04-01-2024 12:00",
        },
    ]);

    const [massComposition] = useState([
        {
            compound: "Methane CH₄ (C1)",
            massPercentage: "100%",
            molecularWeight: 16.04,
        },
    ]);

    const [outputData, setOutputData] = useState(null);

    const handleCalculate = () => {
        // Simulate output data
        const output = {
            volumetricFlow: "Volumetric Flow",
            totalMassLeakRate: "Total Mass Leak Rate (lb/hr): 1.14",
            flowType: "Sonic or Subsonic Flow: Sonic Flow",
            dischargeCoefficient: "Discharge Coefficient: 0.61",
            totalTime: "Total Time of Event (hours): 2.0",
            emissionsSummary: "Methane CH₄ (C1) emissions (lbs): 2.275",
            totalReleased: "Total Amount Released (lbs): 2.275",
        };
        setOutputData(output);
    };

    const handleExportPDF = () => {
        const input = document.getElementById("leak-calculator-content");
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF();
            pdf.addImage(imgData, "PNG", 10, 10, 190, 0);
            pdf.save("leak_calculator_output.pdf");
        });
    };

    const tableCellStyles = {
        color: '#fff',
        borderColor: 'rgba(255, 255, 255, 0.12)',
    };

    return (
        <div className="user-box third-box">
            {/* Header with title and export button */}
            <div className="leak-header">
                <Typography variant="h4" gutterBottom>
                    Leak Calculator
                </Typography>
                <Button
                    variant="outlined"
                    color="secondary"
                    onClick={handleExportPDF}
                >
                    Export PDF
                </Button>
            </div>

            {/* Main content */}
            <div id="leak-calculator-content">
                {/* Data tables */}
                <div className="leak-tables">
                    <TableContainer
                        component={Paper}
                        className="table-container card"
                    >
                        <Typography variant="h6" className="table-title">
                            General Information Table
                        </Typography>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={tableCellStyles}>Unit Name</TableCell>
                                    <TableCell sx={tableCellStyles}>Start Time</TableCell>
                                    <TableCell sx={tableCellStyles}>End Time</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {inputData.map((row, index) => (
                                    <TableRow key={index}>
                                        <TableCell sx={tableCellStyles}>{row.unitName}</TableCell>
                                        <TableCell sx={tableCellStyles}>{row.startTime}</TableCell>
                                        <TableCell sx={tableCellStyles}>{row.endTime}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <TableContainer
                        component={Paper}
                        className="table-container card"
                    >
                        <Typography variant="h6" className="table-title">
                            Mass Composition Table
                        </Typography>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={tableCellStyles}>Compound</TableCell>
                                    <TableCell sx={tableCellStyles}>Mass Percentage</TableCell>
                                    <TableCell sx={tableCellStyles}>Molecular Weight</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {massComposition.map((row, index) => (
                                    <TableRow key={index}>
                                        <TableCell sx={tableCellStyles}>{row.compound}</TableCell>
                                        <TableCell sx={tableCellStyles}>{row.massPercentage}</TableCell>
                                        <TableCell sx={tableCellStyles}>{row.molecularWeight}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>

                {/* Calculate button */}
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleCalculate}
                    className="calculate-button"
                >
                    Calculate
                </Button>

                {/* Calculation output */}
                {outputData && (
                    <TableContainer
                        component={Paper}
                        className="table-container card"
                    >
                        <Typography
                            variant="h6"
                            className="table-title"
                        >
                            Calculation Output
                        </Typography>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell sx={tableCellStyles}>Volumetric Flow</TableCell>
                                    <TableCell sx={tableCellStyles}>
                                        {outputData.volumetricFlow}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={tableCellStyles}>
                                        Total Mass Leak Rate
                                    </TableCell>
                                    <TableCell sx={tableCellStyles}>
                                        {outputData.totalMassLeakRate}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={tableCellStyles}>Flow Type</TableCell>
                                    <TableCell sx={tableCellStyles}>
                                        {outputData.flowType}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={tableCellStyles}>
                                        Discharge Coefficient
                                    </TableCell>
                                    <TableCell sx={tableCellStyles}>
                                        {
                                            outputData.dischargeCoefficient
                                        }
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={tableCellStyles}>
                                        Total Time of Event
                                    </TableCell>
                                    <TableCell sx={tableCellStyles}>
                                        {outputData.totalTime}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={tableCellStyles}>
                                        Emissions Summary
                                    </TableCell>
                                    <TableCell sx={tableCellStyles}>
                                        {outputData.emissionsSummary}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={tableCellStyles}>
                                        Total Amount Released
                                    </TableCell>
                                    <TableCell sx={tableCellStyles}>
                                        {outputData.totalReleased}
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
            </div>
        </div>
    );
};

export default Leak;
