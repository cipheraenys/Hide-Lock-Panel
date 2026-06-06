import * as Main from 'resource:///org/gnome/shell/ui/main.js';

export default class HideLockPanel {
    enable() {
        if (Main.panel) {
            Main.panel.hide();
        }
    }

    disable() {
        if (Main.panel) {
            Main.panel.show();
        }
    }
}
