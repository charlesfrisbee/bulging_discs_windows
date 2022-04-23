import React, { useState } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { styleReset, List, ListItem, Divider, AppBar, Toolbar, Button, TextField, Window, WindowHeader, WindowContent, Tabs, Tab, TabBody, Fieldset, NumberField, Checkbox, Panel } from 'react95';
// pick a theme of your choice
import original from "react95/dist/themes/original";
// original Windows95 font (optionally)
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";
import logo from './images/windowsLogo.png';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
    background-color: #018281
  }
  ${styleReset}
`;

const WindowsDesktop = () => {

  const [open, setOpen] = useState(false)
  const [state, setState] = useState({
    activeTab: 0
  });

  const handleChange = (e, value) => setState({ activeTab: value });

  const { activeTab } = state;

  return (
    <div>
      <GlobalStyles />
      <ThemeProvider theme={original}>
        {/* <List>
          <ListItem>🎤 Sing</ListItem>
          <ListItem>💃🏻 Dance</ListItem>
          <Divider />
          <ListItem disabled>😴 Sleep</ListItem>
        </List> */}
        <div>hey</div>
        <AppBar style={{ height: "50px", top: window.innerWidth < 400 ? "84vh" : "94vh", left: 0 }}>
          <Toolbar style={{ justifyContent: 'space-between' }}>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <Button
                onClick={() => setOpen(!open)}
                active={open}
                style={{ fontWeight: 'bold' }}
              >
                <img
                  src={logo}
                  alt='react95 logo'
                  style={{ height: '20px', marginRight: 4 }}
                />
                Start
              </Button>
              {open && (
                <List
                  style={{
                    position: 'absolute',
                    left: '0',
                    bottom: '100%',
                    width: '150px',
                  }}
                  onClick={() => setOpen(false)}
                >
                  <ListItem>
                    <span role='img' aria-label='👨‍💻'>
                      👨‍💻
                    </span>
                    Profile
                  </ListItem>
                  <ListItem>
                    <span role='img' aria-label='📁'>
                      📁
                    </span>
                    My account
                  </ListItem>
                  <Divider />
                  <ListItem disabled>
                    <span role='img' aria-label='🔙'>
                      🔙
                    </span>
                    Logout
                  </ListItem>
                </List>
              )}
            </div>

            <TextField placeholder='Search...' width={150} />
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </div>
  )
}

export default WindowsDesktop