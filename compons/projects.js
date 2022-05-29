import { projects } from "../configs";
import { Icon } from "../configs/icons";
import styled from "styled-components";

const StyledProjects = styled.div`
  width: 1000px;
  margin: 0px auto;
  .projects-container {
    padding: 50px 0px;
    .projects-header {
      text-align: center;
      .small-title {
        color: var(--green);
        letter-spacing: 2px;
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
      .small-title {
        font-size: var(--fz-xs);
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
    <StyledProjects>
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="small-heading">Other Noteworthy Projects</h2>
          <p className="small-title">View the Archive</p>
        </div>

        <div className="project-wrapper">
          {projects &&
            projects.map(
              ({ id, name, description, website, github, technologies }) => (
                <a
                  key={id}
                  href={website}
                  target="noopenner noreferrer"
                  className="project-content"
                >
                  <div className="project-icons">
                    <span className="folder">
                      <Icon name="Folder"></Icon>
                    </span>
                    <a
                      href={github}
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
                      technologies.map(({ id, tech }) => (
                        <li key={id}>{tech}</li>
                      ))}
                  </ul>
                </a>
              )
            )}
        </div>

        <div className="project-btn">
          <a
            href="https://github.com/simons-devtools"
            target="_blank"
            rel="noreferrer"
          >
            Show More
          </a>
        </div>
      </div>
    </StyledProjects>
  );
}
