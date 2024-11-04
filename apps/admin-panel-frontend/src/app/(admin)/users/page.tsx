import {
  Heading,
  TextField,
  IconButton,
  Table,
  Button,
  Text,
  Switch,
  Badge
} from "@radix-ui/themes";
import { Icon } from "@/shared/ui/icon";
import { useTranslations } from "next-intl";
import { ButtonIcon } from "@/shared/ui/button-icon";

type Props = {
  params: {
    locale: string;
  };
};

const fillOfTable = [
  {
    "display_name": "Text",
    "fname_and_lname": "Text",
    "email": "Text",
    "role": "Text",
    "blocked": false
  },
  {
    "display_name": "Text",
    "fname_and_lname": "Text",
    "email": "Text",
    "role": "Text",
    "blocked": false
  },
  {
    "display_name": "Text",
    "fname_and_lname": "Text",
    "email": "Text",
    "role": "Text",
    "blocked": false
  },
]

export default function Page({ params: { locale } }: Props) {
  const t = useTranslations();

  return (
    <div className="flex flex-col gap-6 relative">
      <div className="sm:flex block sm:justify-between sm:items-center gap-2">
        <Heading as="h1" size="7">
          {t("users.title")}
        </Heading>
        <Button size="3" variant="soft" className="hidden sm:flex">
          <Icon name="add-square" size={18} />
          <Text>{t("users.add_user")}</Text>
        </Button>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex gap-2">
          <TextField.Root
            variant="surface"
            size="3"
            placeholder={`${t("users.search")}`}
            className="w-[313px]"
          >
            <TextField.Slot>
              <Icon name="magnifer" size={16} />
            </TextField.Slot>
          </TextField.Root>
          <IconButton size="3" variant="soft">
            <Icon name="tuning" variant="fill" />
          </IconButton>
        </div>
        <Table.Root variant="surface" size="3" className="overflow-auto">
          <Table.Header>
            <Table.Row align="center">
              <Table.ColumnHeaderCell>
                {t("users.table.display_name")}
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>
                {t("users.table.fname_and_lname")}
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>
                {t("users.table.email")}
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>
                {t("users.table.role")}
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>
                {t("users.table.blocked")}
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>
                {t("users.table.actions")}
              </Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {fillOfTable.map((user, index) => (
              <Table.Row align="center" key={index}>
                <Table.RowHeaderCell>
                  {user.display_name}
                </Table.RowHeaderCell>
                <Table.Cell>
                  {user.fname_and_lname}
                </Table.Cell>
                <Table.Cell>
                  {user.email}
                </Table.Cell>
                <Table.Cell>
                  <Badge size="1" variant="soft"><Text>{user.role}</Text></Badge>
                </Table.Cell>
                <Table.Cell>
                  <Switch size="2" variant="classic" checked={user.blocked}/>
                </Table.Cell>
                <Table.Cell>
                  <IconButton variant="soft">
                    <Icon name="trash-bin" size={24}/>
                  </IconButton>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </div>
      <div className="fixed bottom-0 left-0 w-full p-4">
        <Button size="4" variant="solid" className="flex sm:hidden w-full">
          <Icon name="add-square" size={20} />
          <Text>{t("users.add_user")}</Text>
        </Button>
      </div>
    </div>
  );
}
