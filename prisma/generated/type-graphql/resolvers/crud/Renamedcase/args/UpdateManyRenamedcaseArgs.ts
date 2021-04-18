import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RenamedcaseUpdateManyMutationInput } from "../../../inputs/RenamedcaseUpdateManyMutationInput";
import { RenamedcaseWhereInput } from "../../../inputs/RenamedcaseWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyRenamedcaseArgs {
  @TypeGraphQL.Field(_type => RenamedcaseUpdateManyMutationInput, {
    nullable: false
  })
  data!: RenamedcaseUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => RenamedcaseWhereInput, {
    nullable: true
  })
  where?: RenamedcaseWhereInput | undefined;
}
