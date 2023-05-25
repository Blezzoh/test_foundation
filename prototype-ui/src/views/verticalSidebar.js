import { Sidebar, Menu, Icon, } from "semantic-ui-react"

/**
 * https://react.semantic-ui.com/modules/sidebar/
 */
const VerticalSidebar = ({
    animation = "uncover",
    direction = "vertical",
    visible = true,
  }) => (
    <Sidebar
      as={Menu}
      animation={animation}
      direction={direction}
      icon="labeled"
      inverted
      vertical
      visible={visible}
      width="thin"
    >
      <Menu.Item as="a">
        <Icon name="home" />
        Home
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="user outline" />
        Profile
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="dollar sign" />
        Transactions
      </Menu.Item>
    </Sidebar>
  );

  export default VerticalSidebar