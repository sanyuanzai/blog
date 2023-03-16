interface MenuItemProps {
  name: string
  to: string
  icon: string
  subMenu?: MenuItemProps[]
}

export const navList: MenuItemProps[] = [
  { name: '首页', to: '/', icon: 'home' },
  { name: '分类', to: '/categories', icon: 'categories' },
  { name: '标签', to: '/tags', icon: 'tags' },
  { name: '关于', to: '/about', icon: 'about' },
  { name: '碎碎念', to: '/say', icon: 'say' },
  { name: '留言板', to: '/messageboard', icon: 'messageboard' },
  { name: '建站日志', to: '/timeline', icon: 'timeline' }
]
