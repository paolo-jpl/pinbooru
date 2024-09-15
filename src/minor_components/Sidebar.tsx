import { useLocation } from "react-router-dom";
import { groupBy } from "lodash";

export default function Sidebar({tags, loading = true}: any){
  const location = useLocation();

  return(
    <div className="sidebar">
      <input type="text"/>

        {
          loading ? 
          <div>Loading Tags..</div>
          : renderTags(tags, location)
        }
    </div>
  )
}

function renderTags(tags: any, location: any){
  // match path '/post/:id'
  if(/^\/post\/(.+)/.test(location.pathname))
    return imageTags(tags)
  else return defaultTags(tags)
}

function defaultTags(tags: any){
  const arrangedTags = groupBy(tags, 'category'); 

  return(
    <ul className="sidebar-list">
      <div className="sidebar-header">Trending Tags</div>
      <div>
        {tags.map((tag: any) => {
          return (
            <li key={tag.name}>{tag.name}</li>
          )
        })}
      </div>
    </ul>
  )
}

function imageTags(tags: any){
  const {artist, content, meta} = groupBy(tags, 'category');
  
  return(
    <ul className="sidebar-list">
      { artist ?
        <div>
          <span className="tag-category">Artist</span>
          {artist.map((tag: any) => {
            return (<li key={tag.name}>{tag.name}</li>)
          })}
        </div>
        : <></>
      }

      { content ?
        <div>
          <span className="tag-category">Content</span>
          {content.map((tag: any) => {
            return (<li key={tag.name}>{tag.name}</li>)
          })}
        </div>
        : <></>
      }

      { meta ?
        <div>
          <span className="tag-category">Meta</span>
          {meta.map((tag: any) => {
            return (<li key={tag.name}>{tag.name}</li>)
          })}
        </div>
        : <></>
      }
    </ul>
  )
}