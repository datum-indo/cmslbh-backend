import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseClassificationUpdateManyMutationInput } from "../../../inputs/CaseClassificationUpdateManyMutationInput";
import { CaseClassificationWhereInput } from "../../../inputs/CaseClassificationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCaseClassificationArgs {
  @TypeGraphQL.Field(_type => CaseClassificationUpdateManyMutationInput, {
    nullable: false
  })
  data!: CaseClassificationUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CaseClassificationWhereInput, {
    nullable: true
  })
  where?: CaseClassificationWhereInput | undefined;
}
