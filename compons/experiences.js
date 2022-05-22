import React from "react";
import styled from "styled-components";
import { experiences } from "../configs";

const StyledExperiences = styled.section`
  .experiences-wrapper {
    padding: 50px 150px;
    .experiences-content {
      display: flex;
      .tab-panel-items {
        height: 100%;
        border-left: 2px solid var(--lightest-navy);
        li {
          padding: 12px 15px;
          &.active {
            margin-left: -2px;
            color: var(--green);
            background: var(--light-navy);
            border-left: 3px solid var(--green);
          }
          &:hover {
            color: var(--green);
            background: var(--light-navy);
            cursor: pointer;
          }
        }
      }

      .tab-panel-content {
        ${({ theme }) => theme.mixins.fadeIn}
        .panel-detail {
          padding: 15px 0px 15px 30px;
          .panel-description > p {
            letter-spacing: 2px;
            padding-bottom: 20px;
          }
          .panel-items {
            ${({ theme }) => theme.mixins.fancyList}
            .item {
              font-size: var(--fz-sm);
              color: inherit !important;
            }
          }
        }
      }
    }
  }
`;

export default function Experiences() {
  const { tabPanels, tabPanelList } = experiences;
  const [isActive, setIsActive] = React.useState(1);

  return (
    <StyledExperiences id="experiences-section">
      <div className="experiences-wrapper">
        <h2 className="numbered-heading">Where I&apos;ve Worked</h2>
        <div className="experiences-content">
          <ul className="tab-panel-items">
            {tabPanels &&
              tabPanels.map(({ id, name }, index) => (
                <li
                  key={index}
                  className={`${id === isActive ? "active" : ""}`}
                  onClick={() => setIsActive(id)}
                >
                  {name}
                </li>
              ))}
          </ul>

          <div className="tab-panel-content">
            {tabPanelList &&
              tabPanelList.map(({ id, name, start, end, works }, index) =>
                isActive === id ? (
                  <div className="panel-detail" key={index}>
                    <div className="panel-description">
                      <h3>{name}</h3>
                      <p>
                        <small>
                          {start} - {end}
                        </small>
                      </p>
                    </div>
                    <ul className="panel-items">
                      {works &&
                        works.map(({ list }, index) => (
                          <li key={index} className="item">
                            {list}
                          </li>
                        ))}
                    </ul>
                  </div>
                ) : null
              )}
          </div>
        </div>
      </div>
    </StyledExperiences>
  );
}
