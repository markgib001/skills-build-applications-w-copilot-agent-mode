from djongo import models

class User(models.Model):
    _id = models.ObjectIdField()  # Explicitly define an ObjectIdField for compatibility with djongo
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=255)
    age = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.email

class Team(models.Model):
    _id = models.ObjectIdField()  # Explicitly define an ObjectIdField for compatibility with djongo
    name = models.CharField(max_length=255)
    members = models.ArrayReferenceField(to=User, on_delete=models.CASCADE)  # Use ArrayReferenceField for proper referencing

    def __str__(self):
        return self.name

class Activity(models.Model):
    _id = models.ObjectIdField()  # Explicitly define an ObjectIdField for compatibility with djongo
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    activity_type = models.CharField(max_length=255)  # Rename 'type' to 'activity_type' for consistency
    duration = models.IntegerField()
    date = models.DateField()

    def __str__(self):
        return f"{self.activity_type} - {self.user.email}"

class Leaderboard(models.Model):
    _id = models.ObjectIdField()  # Explicitly define an ObjectIdField for compatibility with djongo
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    score = models.IntegerField()

    def __str__(self):
        return f"{self.user.email} - {self.score}"

class Workout(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    duration = models.IntegerField()

    def __str__(self):
        return self.name
