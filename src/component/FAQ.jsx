import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Divider from "@mui/material/Divider";

const FAQ = () => {
	const [expanded, setExpanded] = React.useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<div className="bg-black  ">
			<div className="m-auto w-[90%] ">
				<h1 className="text-white text-3xl pt-10 ">FAQ</h1>

				<div className="w-[50%]">
					<Accordion
						expanded={expanded === "panel1"}
						onChange={handleChange("panel1")}
						// className="bg-black text-white border-b border-white/20 rounded-lg"
						// style={{ boxShadow: "none" }}
						// disableGutters
						sx={{
							backgroundColor: "#000",
							color: "#fff",
							"&:before": {
								display: "none", // removes the default divider line
							},
							marginBottom: "16px",
							margintTop: "16px",
						}}
					>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon className="text-white" />}
						>
							<Typography>How do I connect the Cyberstick?</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography className="text-stone-200 text-[8px] font-light">
								Connect the Cyberstick to a power source (using the small port
								at the side) and then attach it to the HDMI port of your TV or
								Monitor. A blue comes on indicating that the Cyberstick is
								powered up. If your TV or Monitor is hung on a wall, there is an
								extender cable that comes with the package, attach it to the
								Cyberstick on plug it into your device.
							</Typography>
						</AccordionDetails>
					</Accordion>

					<Divider className="bg-white/20 mb-3" />

					<Accordion
						expanded={expanded === "panel2"}
						onChange={handleChange("panel2")}
						sx={{
							backgroundColor: "#000",
							color: "#fff",
							"&:before": {
								display: "none", // removes the default divider line
							},
							marginBottom: "16px",
							margintTop: "16px",
						}}
					>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
						>
							<Typography className="text-white">
								Why do i need a cybersick?
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								With the remote control that comes with the package, navigate to
								the settings section, connect to a WiFi service and you can
								start streaming contents online.
							</Typography>
						</AccordionDetails>
					</Accordion>

					<Divider className="bg-white/20 mb-3" />

					<Accordion
						expanded={expanded === "panel3"}
						onChange={handleChange("panel3")}
						sx={{
							backgroundColor: "#000",
							color: "#fff",
							"&:before": {
								display: "none", // removes the default divider line
							},
							marginBottom: "16px",
							margintTop: "16px",
						}}
					>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
							cla
						>
							<Typography className="text-white">
								Can I download other applications that do not come with the
								Cyberstick?
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Other applications can be downloaded to the Cyberstick, either
								from the Google playstore or from the browser.
							</Typography>
						</AccordionDetails>
					</Accordion>

					<Divider className="bg-white/20 mb-3" />

					<Accordion
						expanded={expanded === "panel4"}
						onChange={handleChange("panel4")}
						sx={{
							backgroundColor: "#000",
							color: "#fff",
							"&:before": {
								display: "none", // removes the default divider line
							},
							marginBottom: "16px",
							margintTop: "16px",
						}}
					>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
						>
							<Typography className="text-white">
								What is the storage capacity of the Cyberstick?
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Cyberstick comes with an in-built memory space of 16GB, with an
								external slot for a memory card or hard drive.
							</Typography>
						</AccordionDetails>
					</Accordion>

					<Divider className="bg-white/30 mb-4" />

					<Accordion
						expanded={expanded === "panel5"}
						onChange={handleChange("panel5")}
						sx={{
							backgroundColor: "#000",
							color: "#fff",
							"&:before": {
								display: "none", // removes the default divider line
							},
							marginBottom: "16px",
							margintTop: "16px",
						}}
					>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
						>
							<Typography className="text-white">
								Can I connect other devices to it?
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Yes, Cyberstick has a Bluetooth setup with which you can connect
								your Bluetooth speaker and any other device.
							</Typography>
						</AccordionDetails>
					</Accordion>

					<Divider className="bg-white/30 mb-4" />

					<Accordion
						expanded={expanded === "panel6"}
						onChange={handleChange("panel6")}
						sx={{
							backgroundColor: "#000",
							color: "#fff",
							"&:before": {
								display: "none", // removes the default divider line
							},
						}}
					>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
						>
							<Typography className="text-white">
								What else can the Cyberstick be used for?
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								With Cyberstick, you can have access to your Google Workspace
								tools anytime, anywhere.
							</Typography>
						</AccordionDetails>
					</Accordion>
				</div>
			</div>
		</div>
	);
};

export default FAQ;

// const myFaq = ()=>{
//   return ;
// }

// function myFaq(){
//     return ;
// }
//  myFaq();
