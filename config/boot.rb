ENV["BUNDLE_GEMFILE"] ||= File.expand_path("../../Gemfile", __FILE__)

require "bundler/setup" # Set up gems listed in the Gemfile.

unless ENV['CI']
  require 'bootsnap'
  env = ENV['RAILS_ENV'] || 'development'
  Bootsnap.setup(
    cache_dir:            'tmp/cache',
    development_mode:     env == 'development',
    load_path_cache:      true,
    autoload_paths_cache: true,
    disable_trace:        false,  # Not allowed on Ruby 2.5.0
    compile_cache_iseq:   true,
    compile_cache_yaml:   true
  )
end
