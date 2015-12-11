# -*- encoding: utf-8 -*-
# stub: ruby-nuggets 1.0.0 ruby lib

Gem::Specification.new do |s|
  s.name = "ruby-nuggets"
  s.version = "1.0.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib"]
  s.authors = ["Jens Wille"]
  s.date = "2014-05-06"
  s.description = "Various extensions to Ruby classes. [Transitional gem]"
  s.email = "jens.wille@gmail.com"
  s.homepage = "http://github.com/blackwinter/nuggets"
  s.licenses = ["AGPL-3.0"]
  s.post_install_message = "\nruby-nuggets-1.0.0 [2014-06-20]:\n\n* This project has been renamed to +nuggets+. Please update your dependencies.\n\n"
  s.rubygems_version = "2.4.8"
  s.summary = "Extending Ruby. [Transitional gem]"

  s.installed_by_version = "2.4.8" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<nuggets>, ["= 1.0.0"])
    else
      s.add_dependency(%q<nuggets>, ["= 1.0.0"])
    end
  else
    s.add_dependency(%q<nuggets>, ["= 1.0.0"])
  end
end
