import { profile } from "../configs";
import styled from "styled-components";

const StyledHeader = styled.header`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  padding: 200px 0px;

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-robo);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;
  }

  h3 {
    color: var(--slate);
    margin: 10px 0 30px 0;
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    margin-top: 50px;
    ${({ theme }) => theme.mixins.bigButton};
  }
`;

export default function Header() {
  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">Simon Hemrom,</h2>;
  const three = <h3 className="big-heading">I build things for the web</h3>;
  const four = (
    <p>
      I’m a software developer specializing in building (and occasionally
      designing) exceptional digital experiences. Currently, I’m focused on
      building accessible, human-centered products at
      <a href="https://github.com/simonsinfo" target="_blank" rel="noreferrer">
        Upstatement
      </a>
      .
    </p>
  );
  const five = (
    <a href={`mailto:${profile.email}`} className="email-link">
      Contact me for hire!
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeader id="header-section">
      {items.map((item, i) => (
        <div
          key={i}
          className="fadeup-enter-active"
          style={{ transitionDelay: `${i + 1}00ms` }}
        >
          {item}
        </div>
      ))}
    </StyledHeader>
  );
}
