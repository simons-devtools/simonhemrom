import { profile } from "../configs";
import styled from "styled-components";

const StyledContact = styled.section`
  text-align: center;
  padding: 153px 253px;

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    margin-top: 50px;
    ${({ theme }) => theme.mixins.bigButton};
  }
`;

export default function Contact() {
  return (
    <StyledContact id="contact-section">
      <h2 className="numbered-heading overline">What’s Next?</h2>

      <h2 className="title">Get In Touch</h2>

      <p>
        Although I&apos;m not currently looking for any new opportunities, my
        inbox is always open. Whether you have a question or just want to say
        hi, I&apos;ll try my best to get back to you!
      </p>

      <a href={`mailto:${profile.email}`} className="email-link">
        Say Hello
      </a>
    </StyledContact>
  );
}
