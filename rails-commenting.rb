# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) This creates a method called index in the controller that can be invoked through URL requests, if set up as a route.
class BlogPostsController < ApplicationController
  def index
    # ---2) Creates an instance variable in the index method that, if used in the view, will display all entries in the BlogPost model.
    @posts = BlogPost.all
  end

  # ---3) creates a method called show that can be invoked through the URL if set up as a route. Method creates an instance variable that if used in view will show the blog post entry specifically attached to the ID passed as a param.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) creates a controller method called new, when instance variable is invoked a form to create a new blog post is displayed for the user to enter data.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) creates a controller method called create, when invoked if the params passed through new(?) pass validations, will add a new entry to the database and redirect the user to a display of the new entry.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) uses edit controller method, displays a form for updating the blog post entry at the given id param.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) uses update controller method, if data passed as params to update BlogPost entry pass validations without errors then the changes will be commit to the target entry in the database. User is also rerouted to the updated entry.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) using destroy controller method, after the blog post item at given primary key are removed from database the user is redirected, presumably to a confirmation page?
      redirect_to blog_posts_path
    end
  end

  # ---9) Uses private keyword to protect the params method below it, so the params can not be called anywhere else in the program besides their intended use.
  private
  def blog_post_params
    # ---10) This line defines the requirements (validations?) that must be passed as the blog_post_params used in updating or creating items in the database.
    params.require(:blog_post).permit(:title, :content)
  end
end
