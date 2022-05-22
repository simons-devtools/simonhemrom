import { profile } from "../configs";
import styled from "styled-components";

const StyledContact = styled.section`
  width: 1000px;
  margin: 0px auto;
  padding: 180px 250px;
  text-align: center;
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
  .contact-touch > a {
    ${({ theme }) => theme.mixins.bigButton}
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export default function Contact() {
  return (
    <StyledContact id="contact-section">
      <div className="contact-heading">
        <h4 className="heading-one">04. What&apos;s Next?</h4>
        <h2 className="heading-two">Get In Touch</h2>
      </div>
      <div className="contact-description">
        Although I amm not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I
        will try my best to get back to you!
      </div>
      <div className="contact-touch">
        <a href={`mailto:${profile.email}`}>Say Hello</a>
      </div>
    </StyledContact>
  );
}
