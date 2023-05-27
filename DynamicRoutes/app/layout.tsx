export const metadata = {
  title: "Router",
  description: "라우터를 한 번 체험해보자",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
