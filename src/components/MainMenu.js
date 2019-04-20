import React from "react"
import {graphql, StaticQuery, Link} from "gatsby"
import SiteInfo from "./Siteinfo";

import styled, {createGlobalStyle} from "styled-components";

const MainMenuWrapper = styled.div`
    display: flex;
    background-color: rgb(3,27, 77);
`

const MainMenuInner = styled.div`
    height: 100%;
    max-width: 960px;
    width:960px;
    margin: 0 auto;
    display:flex;
`

const MenuItem = styled(Link)`
    color: #fff;
    display: block;
    padding: 16px 16px;
`

const MainMenu = () => (
    <StaticQuery query={graphql`
        {
            allWordpressWpApiMenusMenusItems{
                edges{
                    node{
                        items{
                            title
                            object_slug
                        }
                    }
                }   
            }
        }
    `} render={props => (
        <MainMenuWrapper>
            <MainMenuInner>
                <SiteInfo />
                {props.allWordpressWpApiMenusMenusItems.edges[1].node.items.map(item => (
                    <MenuItem to={item.object_slug} key={item.title}>
                        {item.title}
                    </MenuItem>
                ))}
            </MainMenuInner>
        </MainMenuWrapper>
    )} />
)

export default MainMenu;