import { Button, Notification, TextField } from '@vaadin/react-components';
import type { ViewConfig } from '@vaadin/hilla-file-router/types.js';
import { HelloEndpoint } from 'Frontend/generated/endpoints.js';
import { useSignal } from '@vaadin/hilla-react-signals';

export const config: ViewConfig = {
  menu: {
    title: 'Main page',
  },
};

export default function MainView() {
  const name = useSignal('');

  return (
    <>
      <TextField className="bg-red-500"
        label="Your name"
        onValueChanged={(e) => {
          name.value = e.detail.value;
        }}
      />
      <Button
        onClick={async () => {
          const serverResponse = await HelloEndpoint.sayHello(name.value);
          Notification.show(serverResponse);
        }}>
        Say hello
      </Button>
    </>
  );
}
