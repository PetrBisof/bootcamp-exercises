<?php
class Games
{
    public $id = null;
    public $name = null;
    public $image_url = null;
    public $description = null;
    public $rating = null;
    public $released_at = null;
  
    public function fromArray($array)
    {
        $this->id = $array['id'];
        $this->name = $array['name'];
        $this->image_url = $array['image_url'];
        $this->description = $array['description'];
        $this->rating = $array['rating'];
        $this->released_at = $array['released_at'];

    }
}

?>