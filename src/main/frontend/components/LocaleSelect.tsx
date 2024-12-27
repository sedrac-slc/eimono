import { Select } from '@vaadin/react-components';

export default function LocaleSelect() {
      const items = [
        { label: 'fr', value: 'fr', },
        { label: 'pt', value: 'pt', }
      ];

    return (
      <select className="bg-transparent text-white p-1">
        {items.map(it => <option className="text-black" value={it.value}>{it.label}</option>)}
      </select>
    );
}