namespace :youtube do
  desc "populate db top 14 videos for all possible filter country combination "
  task :archive => :environment do
    YoutubeWorker.perform_async
  end
end
  
