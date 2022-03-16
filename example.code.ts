import * as hui from 'huicraft';

@hui.Plugin('MainPlugin')
export class MainPlugin {
    @hui.ServerEvent()
    public onEnable() {
        console.log("Plugin is enabled!");
    }

    @hui.Command('/hello')
    public helloCommand(player: hui.Player) {
        player.sendMessage("Hello, World!");
    }
}