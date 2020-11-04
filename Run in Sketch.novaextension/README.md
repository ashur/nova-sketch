## Usage

Let's say we're using Nova to develop a Sketch plugin for importing and exporting palettes. Our plugin has a couple of commands, **Import Palette...** and **Export Palette...**

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

![](https://gitlab.com/ashur/nova-sketch/-/raw/main/assets/tasks.png)

Now we can run our Sketch plugin commands with a single click, keyboard shortcut, or command palette invocation ✨💎

[dynamic task assistant]: https://docs.nova.app/api-reference/assistants-registry/#registertaskassistant-object-options

### Configuration

By default, _Run in Sketch_ looks for Sketch in the `/Applications` folder. If you have it installed in a different location, you can specify the path in the extension preferences by opening **Extensions → Extension Library... → Run in Sketch → Preferences**:

![](https://gitlab.com/ashur/nova-sketch/-/raw/main/assets/preferences.png)
