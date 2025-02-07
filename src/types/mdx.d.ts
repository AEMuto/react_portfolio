declare module "*.mdx" {
  const component: React.ComponentType<{
    components?: {
      [key: string]: React.ComponentType<any>;
    };
  }>;
  export default component;
} 