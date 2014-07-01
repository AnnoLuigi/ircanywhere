var Application = require('./app').Application,
	IdentdServer = require('./identd').IdentdServer,
	ModeParser = require('./modeparser').ModeParser,
	UserManager = require('./users').UserManager,
	ChannelManager = require('./channels').ChannelManager,
	EventManager = require('./events').EventManager,
	NetworkManager = require('./networks').NetworkManager,
	IRCHandler = require('./irchandler').IRCHandler,
	IRCFactory = require('./factory').IRCFactory,
	CommandManager = require('./commands').CommandManager,
	RPCHandler = require('./rpc').RPCHandler,
	ModuleManager = require('./module').ModuleManager;

fibrous = require('fibrous');
Sockets = {};
Clients = {};
Users = {};
IdentdCache = {};
// global object holders

application = new Application();
// inject the config so we can mimic it in tests if needed

identdServer = new IdentdServer();
// setup the identd singleton

userManager = new UserManager();
// user manager

rpcHandler = new RPCHandler();
// websocket engine

modeParser = new ModeParser();
// mode parsing engine, no dependencies, just a parser class

networkManager = new NetworkManager();
// setup network manager

ircFactory = new IRCFactory();
// setup irc factory

ircHandler = new IRCHandler();
// setup irc handler

channelManager = new ChannelManager();
// channel manager

eventManager = new EventManager();
// event manager

commandManager = new CommandManager();
// command manager

moduleManager = new ModuleManager();
// module manager
