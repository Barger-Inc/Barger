import type { FillIconName } from "@/shared/types/icon-name"
import { Icon } from "@/shared/ui/icon"
import { IconButton } from "@radix-ui/themes"

type SocialMediaIconButtonProps = {
  name: FillIconName
}
export const SocialMediaIconButton = (props: SocialMediaIconButtonProps) => (
  <IconButton size="3" variant="soft">
    <Icon name={props.name} variant="fill" size={18} />
  </IconButton>
)
