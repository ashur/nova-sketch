# nova-sketch

[![](https://nova.app/badges/clone.svg)][clone]

Run [Sketch plugin][plugins] commands from [Nova].

[clone]: nova://clone?url=https://gitlab.com/ashur/nova-sketch.git
[plugins]: https://developer.sketch.com/plugins
[Nova]: https://nova.app

## Usage

Let's say we're using Nova to develop a Sketch plugin that has a couple of commands, **Import Palette...** and **Export Palette...**

Testing changes to either command's handler might look like this:

1. Make changes in Nova
1. Switch back to Sketch
1. Open **Plugins → Palettes**
1. Select the command to run it

Not bad, but we can still remove a _little_ bit of friction in our development workflow.

Using the [dynamic task assistant] feature added in Nova 2, this extension detects Sketch plugin commands defined in `Contents/Sketch/manifest.json`:

```json
"commands": [
    {
        "name": "Import Palette...",
        "script": "script.js",
        "handlers": {
            "run": "importPalette"
        },
        "identifier": "cab.ashur.Sketch.importPalette"
    },
    {
        "name": "Export Palette...",
        "script": "script.js",
        "handlers": {
            "run": "exportPalette"
        },
        "identifier": "cab.ashur.Sketch.exportPalette"
    }
],
```

and automatically turns them into Tasks:

![](/assets/tasks.png)

Now we can run our Sketch plugin commands with a single click, keyboard shortcut, or command palette invocation ✨💎

[dynamic task assistant]: https://docs.nova.app/api-reference/assistants-registry/#registertaskassistant-object-options

## Setup

1. [Download][download] and unzip this extension
1. Double-click `Run in Sketch.novaextension`
1. Click **Install**

[download]: https://gitlab.com/ashur/nova-sketch/-/archive/main/nova-sketch-main.zip

### Configuration

By default, _Run in Sketch_ looks for Sketch in the `/Applications` folder. If you have it installed in a different location, you can specify the path in the extension preferences by opening **Extensions → Extension Library... → Run in Sketch → Preferences**:

![](/assets/preferences.png)
