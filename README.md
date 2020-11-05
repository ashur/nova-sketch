# nova-sketch

[![](https://nova.app/badges/clone.svg)][clone]

Run [Sketch plugin][plugins] commands from [Nova].

[clone]: https://panic.com/open-in-nova/clone?url=https://gitlab.com/ashur/nova-sketch.git
[plugins]: https://developer.sketch.com/plugins
[Nova]: https://nova.app

## Usage

Let's say we're using Nova to develop a Sketch plugin called **Palettes** that has a couple of commands, **Import Palette...** and **Export Palette...**. Testing changes to either command's handler might look like this:

1. Make changes in Nova
1. Switch back to Sketch
1. Open **Plugins → Palettes**
1. Select the command to run it

Not too bad, but we can remove a little bit of friction in our development workflow!

**Run in Sketch** makes any [plugin command] defined in `Contents/Sketch/manifest.json` available as a Nova task automatically 💎✨

![](/assets/tasks.png)

[plugin command]: https://developer.sketch.com/plugins/plugin-manifest#commands

## Setup

1. [Download][download] and unzip this extension
1. Double-click `Run in Sketch.novaextension`
1. Click **Install**

[download]: https://gitlab.com/ashur/nova-sketch/-/archive/main/nova-sketch-main.zip

## Configuration

By default, **Run in Sketch** looks for Sketch in the `/Applications` folder.

To specify an alternate location, open **Extensions → Extension Library...** then select Run in Sketch's **Preferences** tab:

![](/assets/preferences.png)
