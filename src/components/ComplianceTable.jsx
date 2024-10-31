import React, { useState } from "react";

const options = [
    "Overlapping Reqs. - Potential for Multiple Deviations",
    "NSR 32706 Compliance",
    "HWC MACT Compliance",
    "RCRA Compliance",
    "NSPS Db Compliance",
    "30 TAC 111 - 117 Compliance",
];

const ComplianceTable = () => {
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const dataSets = {
        "Overlapping Reqs. - Potential for Multiple Deviations": [
            { parameter: "CO Concentration (7% O2) ***", limit: 78, uom: "[ppmv 7% O2]", dataQuality: 100, nonCompliance: 1.25, comments: "" },
            { parameter: "Min. Firebox Temp.", limit: 1974, uom: "[F]", dataQuality: 100, nonCompliance: 0.00, comments: "" },
            { parameter: "Heavy Ends Feed Rate", limit: 9.288, uom: "[Mlb/hr]", dataQuality: 100, nonCompliance: 0.00, comments: "" },
            { parameter: "Ash Content", limit: 6.5, uom: "[lb/hr]", dataQuality: 100, nonCompliance: 0.00, comments: "" },
            { parameter: "Max. Gas Velocity", limit: 89569, uom: "[SCFM]", dataQuality: 100, nonCompliance: 0.00, comments: "" },
            { parameter: "Max. Steam Production", limit: "N/A", uom: "[Mlb/hr]", dataQuality: 100, nonCompliance: 0.00, comments: "" }
        ],
        "NSR 32706 Compliance": [
            { hourlyParameter: "NOx Hourly Emissions", limit: 37, uom: "[lb/hr]", dataQuality: 100, nonCompliance: 0, comments: "" },
            { hourlyParameter: "CO Hourly Emissions", limit: 32, uom: "[lb/hr]", dataQuality: 100, nonCompliance: 2, comments: "CEMS calibration per OSE" },
            { hourlyParameter: "SO2 Hourly Emissions", limit: 12.65, uom: "[lb/hr]", dataQuality: 100, nonCompliance: 0, comments: "" },
            { hourlyParameter: "Hourly Firing Rate", limit: 400, uom: "[MMBtu/hr]", dataQuality: 100, nonCompliance: 0, comments: "" },
        ],
        "HWC MACT Compliance": [
            { parameter: "CO Concentration (7% O2) ***", limit: 100, uom: "[ppmv 7% O2]", dataQuality: 100, nonCompliance: 0.00, comments: "" },
            { parameter: "Thermal Chromium Conc.", limit: 1.30E-04, uom: "[lb/MMBTU]", dataQuality: "sample", nonCompliance: 0.00, comments: "" },
            { parameter: "Thermal Mercury Conc.", limit: 4.20E-05, uom: "[lb/MMBTU]", dataQuality: "sample", nonCompliance: 0.00, comments: "" },
            { parameter: "Thermal Total Chlorine Conc.", limit: 5.08E-02, uom: "[lb/MMBTU]", dataQuality: "sample", nonCompliance: 0.00, comments: "" },
            { parameter: "Thermal Cadmium/Lead Conc.", limit: 8.20E-05, uom: "[lb/MMBTU]", dataQuality: "sample", nonCompliance: 0.00, comments: "" },
            { parameter: "Min. Atomizing Steam to HE Delta", limit: 15.13, uom: "[PSIG]", dataQuality: 0, nonCompliance: 0.00, comments: "Not burning heavy ends" }
        ],
        "RCRA Compliance": [
            { parameter: "Min. Steam Production", limit: 90, uom: "[Mlb/hr]", dataQuality: 100, nonCompliance: 0.00, comments: "" },
            { parameter: "Antimony Feed Rate", limit: 16, uom: "[lb/hr]", dataQuality: 100, nonCompliance: 0.00, comments: "" },
            { parameter: "Arsenic Feed Rate", limit: 0.023, uom: "[lb/hr]", dataQuality: 100, nonCompliance: 0.00, comments: ""},
            { parameter: "Barium Feed Rate", limit: 2700, uom: "[lb/hr]", dataQuality: 100, nonCompliance: 0.00, comments: "" },
            { parameter: "Beryllium Feed Rate", limit: 0.0019, uom: "[lb/hr]", dataQuality: 100, nonCompliance: 0.00, comments: "" },
            { parameter: "Cadmium Feed Rate", limit: 0.0019, uom: "[lb/hr]", dataQuality: 100, nonCompliance: 0.00, comments: "" },
            { parameter: "Chromium Feed Rate", limit: 0.034, uom: "[lb/hr]", dataQuality: 100, nonCompliance: 0.00, comments: "" },
            { parameter: "Lead Feed Rate", limit: 4.8, uom: "[lb/hr]", dataQuality: 100, nonCompliance: 0.00, comments: "" },
            { parameter: "Mercury Feed Rate", limit: 4.3, uom: "[lb/hr]", dataQuality: 100, nonCompliance: 0.00, comments: "" },
            { parameter: "Silver Feed Rate", limit: 160, uom: "[lb/hr]", dataQuality: 100, nonCompliance: 0.00, comments: "" },
            { parameter: "Thallium Feed Rate", limit: 16, uom: "[lb/hr]", dataQuality: 100, nonCompliance: 0.00, comments: "" },
            { parameter: "Total Chlorine Feed Rate", limit: 21.7, uom: "[lb/hr]", dataQuality: 100, nonCompliance: 0.00, comments: "" },
            { parameter: "Min. Liquid Waste Temp.", limit: 238, uom: "[F]", dataQuality: 100, nonCompliance: 0.00, comments: "" }
        ],
        "NSPS Db Compliance": [
            { monthlyRecordKeeping: "Annual Capacity Factor", limit: "calc", uom: "-", monthlyAverage: 0.858, annualAverage: 0.765, comments: ""},
        ],
        "30 TAC 111-117 Compliance": [
            { parameter: "CO Concentration (3% O2)", limit: 400, uom: "[ppmv 3% O2]", dataQuality: 100, nonCompliance: 0, comments: "" },
            { parameter: "HRVOC Steam Production", limit: 296.6, uom: "[Mlb/hr]", dataQuality: 100, nonCompliance: 0, comments: "" }
        ]
    };

    const dataColumnsSets = {
        "Overlapping Reqs. - Potential for Multiple Deviations": [
            { name: "Parameter", key: "parameter" },
            { name: "Limit", key: "limit" },
            { name: "UOM", key: "uom" },
            { name: "Data Quality", key: "dataQuality" },
            { name: "Non-Compliance [hrs]", key: "nonCompliance" },
            { name: "Comments", key: "comments" },
        ],
        "NSR 32706 Compliance": [
            { name: "Hourly Parameter", key: "hourlyParameter" },
            { name: "Limit", key: "limit" },
            { name: "UOM", key: "uom" },
            { name: "Data Quality", key: "dataQuality" },
            { name: "Non-Compliance [hrs]", key: "nonCompliance" },
            { name: "Comments", key: "comments" },
        ],
        "HWC MACT Compliance": [
            { name: "Parameter", key: "parameter" },
            { name: "Limit", key: "limit" },
            { name: "UOM", key: "uom" },
            { name: "Data Quality", key: "dataQuality" },
            { name: "Non-Compliance [hrs]", key: "nonCompliance" },
            { name: "Comments", key: "comments" },
        ],
        "RCRA Compliance": [
            { name: "Parameter", key: "parameter" },
            { name: "Limit", key: "limit" },
            { name: "UOM", key: "uom" },
            { name: "Data Quality", key: "dataQuality" },
            { name: "Non-Compliance [hrs]", key: "nonCompliance" },
            { name: "Comments", key: "comments" },
        ],
        "NSPS Db Compliance": [
            { name: "Monthly Recordkeeping", key: "monthlyRecordKeeping" },
            { name: "Limit", key: "limit" },
            { name: "UOM", key: "uom" },
            { name: "Monthly Average", key: "monthlyAverage" },
            { name: "Annual Average", key: "annualAverage" },
            { name: "Comments", key: "comments" },
        ],
        "30 TAC 111-117 Compliance": [
            { name: "Parameter", key: "parameter" },
            { name: "Limit", key: "limit" },
            { name: "UOM", key: "uom" },
            { name: "Data Quality", key: "dataQuality" },
            { name: "Non-Compliance [hrs]", key: "nonCompliance" },
            { name: "Comments", key: "comments" },
        ],
    };


    const subDataSets = {
        "Overlapping Reqs. - Potential for Multiple Deviations": [
            { cems: "BIF Downtime", annualLimit: "-", uom: "[hrs]", downtime: 0, annualDT: "0.01%", comments: "--" },
            { cems: "CO CEMs Downtime", annualLimit: "5%", uom: "[%]", downtime: 0, annualDT: "0.05%", comments: "--" },
            { cems: "NOx CEMs Downtime", annualLimit: "5%", uom: "[%]", downtime: 0, annualDT: "0.05%", comments: "--" }
        ],
        "NSR 32706 Compliance": [
            { annualParameter: "NOx Annual Emissions", limit: 132.77, uom: "[ton/yr]", monthlyAverage: 6, nonCompliance: 0, comments: "" },
            { annualParameter: "CO Annual Emissions", limit: 93.82, uom: "[ton/yr]", monthlyAverage: 0, nonCompliance: 0, comments: "" },
            { annualParameter: "SO2 Annual Emissions", limit: 34.69, uom: "[ton/yr]", monthlyAverage: 0, nonCompliance: 0, comments: "" },
            { annualParameter: "Annual Average Firing Rate", limit: 357, uom: "[MMBtu/hr]", monthlyAverage: 303, nonCompliance: 0, comments: "" }
        ],
        "HWC MACT Compliance": [],
        "RCRA Compliance": [],
        "NSPS Db Compliance" : [
            { parameter: "NOx Emissions Factor", limit: "calc", uom: "[lb/MMBtu]", exclusions: 0.051, comments: "" },
            { parameter: "NOx CEMS: Exclusion Days", limit: "Uptime < 75% of time", uom: "", exclusions: 0, comments: "" },
        ],
        "30 TAC 111-117 Compliance": [
            { cems: "HRVOC CMS Downtime", annualLimit: "5%", uom: "[%]", downtime: 0, annualDT: "0.03%", comments: "Compliance Based on Calendar Year" }
        ],
        
    };

    const subDataColumnsSets = {
        "Overlapping Reqs. - Potential for Multiple Deviations": [
            { name: "CEMS", key: "cems" },
            { name: "Annual Limit", key: "annualLimit" },
            { name: "UOM", key: "uom" },
            { name: "Downtime [hrs]", key: "downtime" },
            { name: "Annual DT [%]", key: "annualDT" },
            { name: "Comments", key: "comments" },
        ],
        "NSR 32706 Compliance": [
            { name: "Annual Parameter", key: "annualParameter" },
            { name: "Limit", key: "limit" },
            { name: "UOM", key: "uom" },
            { name: "Monthly Avg", key: "monthlyAverage" },
            { name: "Non-Compliance [1=Over Annual Limit]", key: "nonCompliance" },
            { name: "Comments", key: "comments" },
        ],
        "HWC MACT Compliance": [], // No subDataColumns for this category
        "RCRA Compliance": [],     // No subDataColumns for this category
        "NSPS Db Compliance": [
            { name: "Parameter", key: "parameter" },
            { name: "Limit", key: "limit" },
            { name: "UOM", key: "uom" },
            { name: "Exclusions/Averages to Report [days]", key: "exclusions" },
            { name: "Comments", key: "comments" },
        ],
        "30 TAC 111-117 Compliance": [
            { name: "CMS", key: "cems" },
            { name: "Limit", key: "annualLimit" },
            { name: "UOM", key: "uom" },
            { name: "Downtime [hrs]", key: "downtime" },
            { name: "Annual DT [%]", key: "annualDT" },
            { name: "Comments", key: "comments" },
        ],
    };



    const data = dataSets[selectedOption] || [];
    const subData = subDataSets[selectedOption] || [];
    const dataColumns = dataColumnsSets[selectedOption] || [];
    const subDataColumns = subDataColumnsSets[selectedOption] || [];

    return (
        <div className="cards-wrapper" style={{ "--delay": "1s" }}>
            <div className="cards-header">
                <h2>{selectedOption}</h2>
                <button className="button">
                    Add to Report
                </button>
                <select
                    className="button"
                    value={selectedOption}
                    onChange={handleSelectChange}
                    style={{ height: "30px", width: "auto" }}
                >
                    {options.map((option) => (
                        <option key={option}>{option}</option>
                    ))}
                </select>
            </div>
            <div className="cards card">
                <div className="table-container">
                    <table className="table">
                        <thead>
                            <tr>
                                {dataColumns.map((col, index) => (
                                    <th key={index}>{col.name}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row, index) => (
                                <tr key={index}>
                                    {dataColumns.map((col) => (
                                        <td key={col.key}>
                                            {/* Conditional rendering for Data Quality */}
                                            {col.key === "dataQuality" ? (
                                                row.dataQuality === 100 ? (
                                                    <div className="status is-green">
                                                        {/* Green Checkmark SVG */}
                                                        <svg
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <path d="M20 6L9 17l-5-5" />
                                                        </svg>
                                                        {row.dataQuality}%
                                                    </div>
                                                ) : row.dataQuality >= 75 ? (
                                                    <div className="status is-warning">
                                                        {/* Warning Sign SVG */}
                                                        <svg
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <path d="M10 2L2 20h20L14 2h-4z" />
                                                            <line x1="12" y1="16" x2="12" y2="12" />
                                                            <line x1="12" y1="8" x2="12" y2="8" />
                                                        </svg>
                                                        {row.dataQuality}%
                                                    </div>
                                                ) : (
                                                    <div className="status is-red">
                                                        {/* Red X Mark SVG */}
                                                        <svg
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <line x1="18" y1="6" x2="6" y2="18" />
                                                            <line x1="6" y1="6" x2="18" y2="18" />
                                                        </svg>
                                                        {row.dataQuality}%
                                                    </div>
                                                )
                                            ) : col.key === "nonCompliance" ? (
                                                /* Conditional rendering for Non-Compliance */
                                                row.nonCompliance === 0 ? (
                                                    <div className="status is-green">
                                                        {/* Green Checkmark SVG */}
                                                        <svg
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <path d="M20 6L9 17l-5-5" />
                                                        </svg>
                                                        {row.nonCompliance.toFixed(2)} hrs
                                                    </div>
                                                ) : row.nonCompliance > 0 &&
                                                    row.nonCompliance < row.limit ? (
                                                    <div className="status is-warning">
                                                        {/* Warning Sign SVG */}
                                                        <svg
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <path d="M10 2L2 20h20L14 2h-4z" />
                                                            <line x1="12" y1="16" x2="12" y2="12" />
                                                            <line x1="12" y1="8" x2="12" y2="8" />
                                                        </svg>
                                                        {row.nonCompliance.toFixed(2)} hrs
                                                    </div>
                                                ) : (
                                                    <div className="status is-red">
                                                        {/* Red X Mark SVG */}
                                                        <svg
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <line x1="18" y1="6" x2="6" y2="18" />
                                                            <line x1="6" y1="6" x2="18" y2="18" />
                                                        </svg>
                                                        {row.nonCompliance.toFixed(2)} hrs
                                                    </div>
                                                )
                                            ) : (
                                                /* Default rendering */
                                                row[col.key] || "--"
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                        {subData.length > 0 && (
                            <>
                                <thead>
                                    <tr>
                                        {subDataColumns.map((col, index) => (
                                            <th key={index}>{col.name}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {subData.map((row, index) => (
                                        <tr key={index}>
                                            {subDataColumns.map((col) => (
                                                <td key={col.key}>
                                                    {row[col.key] || "--"}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </>
                        )}
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ComplianceTable;