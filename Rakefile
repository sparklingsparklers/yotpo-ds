require 'erb'

namespace :yotpo do

  desc 'Generate a static display spec page'
  task :ds do
    puts 'Generating Yotpo Design Spec static page...'
    template_path = File.join(File.expand_path('../', __FILE__), 'index.html.erb')
    template = ERB.new File.new(template_path).read, nil, "%"
    @ds = 'Design Spec'
    File.open(File.join(File.expand_path('../', __FILE__), 'test.html'), "w") do |file|
      file.puts template.result(binding)
    end
    puts 'Done!'
  end

end