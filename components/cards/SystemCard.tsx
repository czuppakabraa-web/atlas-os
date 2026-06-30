import Panel from "../ui/Panel";
import Metric from "../ui/Metric";
import StatusLine from "../ui/StatusLine";

type Props = {
  title: string;
  value: string;
  unit?: string;
  status: string;
};

export default function SystemCard({
  title,
  value,
  unit,
  status,
}: Props) {
  return (
    <Panel>
      <Metric
        label={title}
        value={value}
        unit={unit}
      />

      <StatusLine status={status} />
    </Panel>
  );
}