import { profile } from "../configs";
import styled from "styled-components";

const StyledContact = styled.section`
  .contact-content {
    text-align: center;
    padding: 80px 250px;
    .contact-heading {
      .heading-one {
        color: var(--green);
      }
      .heading-two {
        font-size: 46px;
        margin: 10px 0px;
      }
    }
    .contact-description {
      margin-bottom: 50px;
    }
    .contact-btn > a {
      ${({ theme }) => theme.mixins.bigButton}
    }
  }
`;

export default function Contact() {
  return (
    <StyledContact id="contact-section">
      <div className="contact-content">
        <div className="contact-heading">
          <h4 className="heading-one">04. What&apos;s Next?</h4>
          <h2 className="heading-two">Get In Touch</h2>
        </div>
        <div className="contact-description">
          Although I amm not currently looking for any new opportunities, my
          inbox is always open. Whether you have a question or just want to say
          hi, I will try my best to get back to you!
        </div>
        <div className="contact-btn">
          <a href={`mailto:${profile.email}`}>Say Hello</a>
        </div>
      </div>
    </StyledContact>
  );
}
