import React from "react";
import { Box } from "@mui/material";
import PageHeader from "../../components/common/common-ui-components/page-header";
import InitialTimeSlot from "../api/initialTimeSlot";
import { Button, Card, CardContent, Container } from "@mui/joy";
const WashingMachine = () => {
  return (
    <Box>
      <PageHeader
        heading={"Washing Machine"}
        subheading={
          "Showing you the available booking slots which you can book.  "
        }
      />
      <Container>
        {InitialTimeSlot.map((item: any, index: number) => (
          <Card key={index}>
            <CardContent>{`${item?.startTime} - ${item?.endTime}`}</CardContent>
            <Button
              color="primary"
              // onClick={onOpenBookingModal}
              data-timeslot-id={index}
            >
              Book This Time Slot
            </Button>
          </Card>
        ))}
      </Container>
    </Box>
  );
};

export default WashingMachine;
