Do you develop [Sketch] plugins in Nova? **Run in Sketch** makes any [plugin command] defined in `Contents/Sketch/manifest.json` available as a Nova task automatically 💎✨

![](https://gitlab.com/ashur/nova-sketch/-/raw/main/assets/tasks.png)

[Sketch]: https://sketch.com
[plugin command]: https://developer.sketch.com/plugins/plugin-manifest#commands

## Usage

To run a plugin command in Sketch:

1. Open your `.sketchplugin` project in Nova
1. In the Tasks toolbar, select the command you want to run
1. Click the **Run** button

> 💡 You can also press `Command-B` or enter the plugin command name in Nova's command palette

## Configuration

By default, **Run in Sketch** looks for Sketch in the `/Applications` folder.

To specify an alternate location, open **Extensions → Extension Library...** then select Run in Sketch's **Preferences** tab:

![](https://gitlab.com/ashur/nova-sketch/-/raw/main/assets/preferences.png)
