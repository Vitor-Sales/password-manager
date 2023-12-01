export type ServiceProps = {
  service: {
    name: string,
    login: string,
    password: string,
    URL: string,
    id: number,
  }
  removeCard: (serviceName: string) => void,
};
