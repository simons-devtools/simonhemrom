import { projects } from "../configs";
import { Icon } from "../configs/icons";
import styled from "styled-components";

const StyledProjects = styled.div`
  width: 1000px;
  margin: 0px auto;
  padding: 50px 0px;
  .projects-header {
    text-align: center;
    .small-title {
      color: var(--green);
      letter-spacing: 2px;
    }
  }

  .project-container {
    margin: 44px 0px;
    ${({ theme }) => theme.mixins.flexBetween}
    flex-wrap: wrap;
    .project-wrapper {
      display: block;
      width: 326px;
      height: 366px;
      margin-top: 11px;
      padding: 30px 20px;
      background: var(--light-navy);
      border-radius: var(--border-radius);
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
      .project-article {
        min-height: 180px;
        margin: 40px 0px 20px 0px;
        .title {
          letter-spacing: 2px;
        }
        .description {
          font-size: var(--fz-sm);
        }
      }
      .project-technologies {
        display: flex;
        li {
          margin-right: 34px;
        }
      }
      &:hover {
        transform: var(--translateY);
        transition: var(--transition);
      }
    }
  }

  .project-btn {
    text-align: center;
    a {
      ${({ theme }) => theme.mixins.smallButton}
    }
  }
`;

export default function Projects() {
  console.log("data", projects);

  return (
    <StyledProjects>
      <div className="projects-header">
        <h2 className="small-heading">Other Noteworthy Projects</h2>
        <p className="small-title">View the Archive</p>
      </div>

      <div className="project-container">
        {projects &&
          projects.map(
            ({ id, name, description, website, github, technologies }) => (
              <a
                key={id}
                href={website}
                target="noopenner noreferrer"
                className="project-wrapper"
              >
                <div className="project-icons">
                  <span className="folder">
                    <Icon name="Folder"></Icon>
                  </span>
                  <span className="github">
                    <Icon name="GitHub"></Icon>
                  </span>
                </div>
                <div className="project-article">
                  <h4 className="title">{name}</h4>
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
          href="https://github.com/simonsinfo"
          target="_blank"
          rel="noopenner noreferrer"
        >
          Show More Projects
        </a>
      </div>
    </StyledProjects>
  );
}
