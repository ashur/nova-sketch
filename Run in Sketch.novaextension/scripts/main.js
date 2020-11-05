let didNotify = false;

class TaskProvider
{
	constructor()
	{
		this.manifestPath = nova.path.join( nova.workspace.path, "Contents/Sketch/manifest.json" );
		this.manifest = {};

		nova.fs.watch( "Contents/Sketch/manifest.json", () =>
		{
			this.readManifest();
			nova.workspace.reloadTasks( "cab.ashur.RunInSketch" );
		});

		this.bundlePath = nova.config.get( "cab.ashur.RunInSketch.bundlePath" );
		nova.config.observe( "cab.ashur.RunInSketch.bundlePath", () =>
		{
			didNotify = false;
			this.bundlePath = nova.config.get( "cab.ashur.RunInSketch.bundlePath" );
			nova.workspace.reloadTasks( "cab.ashur.RunInSketch" );
		});

		this.readManifest();
	}

	readManifest()
	{
		if( nova.fs.stat( this.manifestPath ) )
		{
			let manifestFile = nova.fs.open( this.manifestPath, "r" );
			let manifestJSON = manifestFile.read();
			manifestFile.close();

			this.manifest = JSON.parse( manifestJSON );
		}
	}

	/**
	 * @returns {Promise<Task[]>}
	 */
	async provideTasks()
	{
		let processCommand = `${this.bundlePath}/Contents/Resources/sketchtool/bin/sketchtool`;
		if( !nova.fs.stat( processCommand ) )
		{
			if( !didNotify )
			{				
				let request = new NotificationRequest( "cab.ashur.RunInSketch-bundleNotFound" );
				request.title = "Sketch Not Found";
				request.body = `The Sketch application bundle could not be found at ‘${this.bundlePath}’.\n\nSpecify a new path in Preferences.`;
				request.actions = ["OK", "Extension Preferences..."];
				nova.notifications.add( request )
					.then( response =>
					{
						if( response.actionIdx === 1 )
						{
							nova.openConfig( "cab.ashur.RunInSketch" );
						}
					})
					.catch( error =>
					{
						console.error( error );
						console.error( error.stack );
					});
	
				didNotify = true;
			}

			return [];
		}

		try
		{
			let tasks = [];
			if( this.manifest.commands && Array.isArray( this.manifest.commands ) )
			{
				tasks = this.manifest.commands.map( sketchCommand =>
				{
					if( sketchCommand.name )
					{
						let task = new Task( sketchCommand.name );
						task.setAction( Task.Run, new TaskProcessAction( processCommand, {
							args: ["run", nova.workspace.path, sketchCommand.identifier],
							env: {},
						} ) );

						return task;						
					}
				});
			}

			return tasks.filter( task => task );
		}
		catch( error )
		{
			console.error( error );
			console.error( error.stack );
		}
	}
}

let taskProvider = new TaskProvider();
nova.assistants.registerTaskAssistant( taskProvider, { identifier: "cab.ashur.RunInSketch" } );
