import styled from "styled-components";

const StyledHeader = styled.section`
  width: 1000px;
  margin: 0px auto;
  padding: 160px 0px 80px 0px;
  .header-content {
    display: flex;
    flex-direction: column;
    .hello {
      color: var(--green);
    }
    .description {
      width: 500px;
      margin-top: 24px;
    }
    .checkout {
      margin-top: 48px;
      .button {
        ${({ theme }) => theme.mixins.bigButton}
      }
    }
  }
`;

export default function Header() {
  return (
    <StyledHeader id="header-section">
      <div className="header-content">
        <div className="hello">Hi, my mane is</div>
        <div className="big-heading">Simon Hemrom,</div>
        <div className="big-heading">I build things for the web</div>
        <div className="description">
          <p>
            I’m a software developer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused
            on building accessible, human-centered products at
            <a
              href="https://google.com"
              target="_blank"
              rel="noopenner noreferrer"
            >
              Upstatement
            </a>
            .
          </p>
        </div>

        <div className="checkout">
          <a
            href="https://google.com"
            target="_blank"
            rel="noopenner noreferrer"
            className="button"
          >
            Contact me for hire!
          </a>
        </div>
      </div>
    </StyledHeader>
  );
}
