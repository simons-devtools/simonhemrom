import { Icon } from "../icons";
import { profile, projects } from "../config";
import styled from "styled-components";

const StyledProjects = styled.section`
  .projects-container {
    .projects-header {
      text-align: center;
      .small-heading {
        margin: 0;
      }
    }

    .project-wrapper {
      margin: 44px 0px;
      ${({ theme }) => theme.mixins.flexBetween}
      flex-wrap: wrap;
      .project-content {
        display: block;
        width: 326px;
        height: 336px;
        margin-top: 11px;
        padding: 30px 20px;
        background: var(--light-navy);
        border-radius: var(--border-radius);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .project-icons {
          ${({ theme }) => theme.mixins.flexBetween}
          .folder > svg {
            width: 40px;
            height: 40px;
            display: block;
            color: var(--green);
          }
          .github > svg {
            width: 25px;
            height: 25px;
            display: block;
          }
        }
        .project-article > .description {
          line-height: 20px;
          font-size: var(--fz-sm);
        }
        .project-technologies {
          display: flex;
          margin: 0px;
          li {
            margin-right: 20px;
            font-size: var(--fz-xxs);
            letter-spacing: 1.4px;
          }
        }
        &:hover {
          color: var(--slate);
          transform: var(--translateY);
          transition: var(--transition);
          .title {
            color: var(--green);
            transition: var(--transition);
          }
        }
      }
    }

    .project-btn {
      text-align: center;
      a {
        ${({ theme }) => theme.mixins.bigButton}
      }
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    .projects-container {
      padding: 0px 0px;
      .small-heading {
        font-size: var(--fz-xl);
      }
      .project-wrapper {
        display: flex;
        flex-direction: column;
        .project-content {
          width: 100%;
        }
      }
    }
  }
`;

export default function Projects() {
  return (
    <StyledProjects id="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="numbered-heading overline">View the Archive</h2>
          <h2 className="small-heading">Other Noteworthy Projects</h2>
        </div>

        <div className="project-wrapper">
          {projects &&
            projects.map(
              ({ name, stream, source, description, technologies }, i) => (
                <a
                  key={i}
                  href={stream}
                  target="noreferrer"
                  className="project-content"
                >
                  <div className="project-icons">
                    <span className="folder">
                      <Icon name="Folder"></Icon>
                    </span>
                    <a
                      href={source}
                      target="_blank"
                      rel="noreferrer"
                      className="github"
                    >
                      <Icon name="GitHub"></Icon>
                    </a>
                  </div>
                  <div className="project-article">
                    <h3 className="title">{name}</h3>
                    <p className="description">{description}</p>
                  </div>
                  <ul className="project-technologies">
                    {technologies &&
                      technologies.map((tech, i) => <li key={i}>{tech}</li>)}
                  </ul>
                </a>
              )
            )}
        </div>

        <div className="project-btn">
          <a href={profile.branch} target="_blank" rel="noreferrer">
            Show More
          </a>
        </div>
      </div>
    </StyledProjects>
  );
}
