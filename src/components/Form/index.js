import React, { useState } from "react";
import { connect } from "react-redux";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Wrapper from "./Wrapper";
import Label from "./Label";
import Paragraph from "../Paragraph";
import Row from "./Row";
import { fetchOffers } from "../../actions";
import { changeDateFormat } from "../../utilities/change-date-format";

const Form = ({ getOffers }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [guestData, setGuestData] = useState({ children: 0, adults: 0 });

  const handleSubmit = (e) => {
    e.preventDefault();

    getOffers(
      changeDateFormat(startDate),
      changeDateFormat(endDate),
      guestData.adults,
      guestData.children
    );
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <Row>
        <Label>
          <Paragraph>Date from</Paragraph>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
          />
        </Label>
        <Label>
          <Paragraph>Date to</Paragraph>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
          />
        </Label>
      </Row>
      <Row>
        <Label>
          <Paragraph>Adult</Paragraph>
          <input
            type="number"
            value={guestData.adults}
            onChange={(e) =>
              setGuestData({ ...guestData, adults: e.target.value })
            }
          />
        </Label>
        <Label>
          <Paragraph>Children</Paragraph>
          <input
            type="number"
            value={guestData.children}
            onChange={(e) =>
              setGuestData({ ...guestData, children: e.target.value })
            }
          />
        </Label>
      </Row>
      <button type="submit">Szukaj</button>
    </Wrapper>
  );
};

const mapDispatchToProps = { getOffers: fetchOffers };

export default connect(null, mapDispatchToProps)(Form);
