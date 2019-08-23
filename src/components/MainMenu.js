import React from 'react'
import {Container, Menu, Image, Dropdown} from 'semantic-ui-react'

const MainMenu = () => (
  <Menu fixed='top' inverted>
    <Container>
      <Menu.Item as='a' href='/' header>
        <Image size='mini' src='/logo.png' style={{marginRight: '1.5em'}} />
        Главная
      </Menu.Item>

      <Dropdown item simple text='Категории'>
        <Dropdown.Menu>
          <Dropdown.Item as='a' href='#'>
            <i className='dropdown icon' />
            <span className='text'>Категория 1</span>
            <Dropdown.Menu>
              <Dropdown.Item as='a' href='#'>
                Тема 1
              </Dropdown.Item>
              <Dropdown.Item as='a' href='#'>
                Тема 2
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Item>
          <Dropdown.Item as='a' href='#'>
            <i className='dropdown icon' />
            <span className='text'>Категория 2</span>
            <Dropdown.Menu>
              <Dropdown.Item as='a' href='#'>
                Тема 1
              </Dropdown.Item>
              <Dropdown.Item as='a' href='#'>
                Тема 2
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Item>
          <Dropdown.Item as='a' href='#'>
            <i className='dropdown icon' />
            <span className='text'>Категория 3</span>
            <Dropdown.Menu>
              <Dropdown.Item as='a' href='#'>
                Тема 1
              </Dropdown.Item>
              <Dropdown.Item as='a' href='#'>
                Тема 2
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Item>
          <Dropdown.Item as='a' href='#'>
            <i className='dropdown icon' />
            <span className='text'>Категория 4</span>
            <Dropdown.Menu>
              <Dropdown.Item as='a' href='#'>
                Тема 1
              </Dropdown.Item>
              <Dropdown.Item as='a' href='#'>
                Тема 2
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Item>
          <Dropdown.Item as='a' href='#'>
            <i className='dropdown icon' />
            <span className='text'>Категория 5</span>
            <Dropdown.Menu>
              <Dropdown.Item as='a' href='#'>
                Тема 1
              </Dropdown.Item>
              <Dropdown.Item as='a' href='#'>
                Тема 2
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Item>
          <Dropdown.Item as='a' href='#'>
            <i className='dropdown icon' />
            <span className='text'>Категория 6</span>
            <Dropdown.Menu>
              <Dropdown.Item as='a' href='#'>
                Тема 1
              </Dropdown.Item>
              <Dropdown.Item as='a' href='#'>
                Тема 2
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Container>
  </Menu>
)

export default MainMenu
