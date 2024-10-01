type Props = {
  children: React.ReactNode;
};
function MainLayout({ children }: Props) {
  return (
    <div className="wrapper">
      <div className="body-wrapper">
        {children}
      </div>
    </div>
  );
}

export default MainLayout;
